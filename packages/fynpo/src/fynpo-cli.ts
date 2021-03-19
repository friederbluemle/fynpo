#!/usr/bin/env node

import Path from "path";
import NixClap from "nix-clap";
import Bootstrap from "./bootstrap";
import Prepare from "./prepare";
import Changelog from "./update-changelog";
import Publish from "./publish";
import Run from "./run";
import Init from "./init";
import makePkgDeps from "./make-pkg-deps";
import readPackages from "./read-packages";
import logger from "./logger";
import Fs from "fs";

const makeBootstrap = (parsed) => {
  const cwd = parsed.opts.cwd || process.cwd();
  return new Bootstrap(
    makePkgDeps(readPackages(cwd), parsed.opts.ignore || [], parsed.opts.only || []),
    parsed.opts
  );
};

const execBootstrap = (parsed) => {
  const bootstrap = makeBootstrap(parsed);
  let statusCode = 0;
  logger.debug("CLI options", JSON.stringify(parsed));
  return bootstrap
    .exec({
      build: parsed.opts.build,
      fynOpts: parsed.opts.fynOpts,
      concurrency: parsed.opts.concurrency,
      skip: parsed.opts.skip,
    })
    .then(
      () => {
        bootstrap.logErrors();
        statusCode = bootstrap.failed;
      },
      () => {
        bootstrap.logErrors();
        statusCode = 1;
      }
    )
    .finally(() => {
      if (statusCode !== 0 || parsed.opts.saveLog) {
        Fs.writeFileSync("fynpo-debug.log", logger.logData.join("\n") + "\n");
        logger.error("Please check the file fynpo-debug.log for more info.");
      }
      process.exit(statusCode);
    });
};

const execLocal = (parsed) => {
  return makeBootstrap(parsed).updateToLocal();
};

const execPrepare = (parsed) => {
  const opts = Object.assign({ cwd: process.cwd() }, parsed.opts);

  return new Prepare(
    opts,
    makePkgDeps(readPackages(opts.cwd), parsed.opts.ignore || [], [])
  ).exec();
};

const execChangelog = (parsed) => {
  const opts = Object.assign({ cwd: process.cwd() }, parsed.opts);

  return new Changelog(
    opts,
    makePkgDeps(readPackages(opts.cwd), parsed.opts.ignore || [], [])
  ).exec();
};

const execPublish = (parsed) => {
  const opts = Object.assign({ cwd: process.cwd() }, parsed.opts);

  return new Publish(opts, readPackages(opts.cwd)).exec();
};

const execRunScript = (parsed) => {
  const opts = Object.assign({ cwd: process.cwd() }, parsed.opts);

  return new Run(opts, parsed.args, readPackages(opts.cwd)).exec();
};

const execInit = (parsed) => {
  const opts = Object.assign({ cwd: process.cwd() }, parsed.opts);

  return new Init(opts).exec();
};

const nixClap = new NixClap({
  usage: "$0 [command] [options]",
  handlers: {
    parsed: (data) => {
      try {
        const cwd = data.parsed.opts.cwd || process.cwd();
        /* eslint-disable @typescript-eslint/no-var-requires */
        data.nixClap.applyConfig(require(Path.join(cwd, "lerna.json")).fynpo, data.parsed);
      } catch (e) {
        // Error
      }
    },
  },
}).init(
  {
    cwd: {
      type: "string",
      desc: "set fynpo's working directory",
    },
    ignore: {
      alias: "i",
      type: "string array",
      desc: "list of packages to ignore",
    },
    skip: {
      type: "string array",
      desc: "list of packages to skip running fyn install on, but won't ignore",
    },
    only: {
      alias: "o",
      type: "string array",
      desc: "list of packages to handle only",
    },
    deps: {
      alias: "d",
      type: "number",
      default: 10,
      desc: "level of deps to include even if they were ignored",
    },
    "save-log": {
      alias: "sl",
      type: "boolean",
      default: false,
      desc: "save logs to fynpo-debug.log",
    },
    tag: {
      type: "boolean",
      default: false,
      desc: "create tags for individual packages",
    },
  },
  {
    bootstrap: {
      alias: "b",
      desc: "bootstrap packages",
      default: true,
      exec: execBootstrap,
      options: {
        build: {
          type: "boolean",
          default: true,
          desc: "run npm script build if no prepare",
        },
        concurrency: {
          alias: "cc",
          type: "number",
          default: 3,
          desc: "number of packages to bootstrap concurrently",
        },
      },
    },
    local: {
      alias: "l",
      desc: "update packages dependencies to point to local",
      exec: execLocal,
    },
    prepare: {
      alias: "p",
      desc: "Prepare packages versions for publish",
      exec: execPrepare,
    },
    changelog: {
      alias: "c",
      desc: "Update changelog",
      exec: execChangelog,
    },
    run: {
      alias: "r",
      desc: "Run passed npm script in each package",
      args: "<script>",
      exec: execRunScript,
    },
    publish: {
      alias: "pb",
      desc: "Publish Packages",
      exec: execPublish,
      options: {
        "dist-tag": {
          type: "string",
          desc: "set publish tag for all packages",
        },
        "dry-run": {
          type: "boolean",
          default: false,
          desc: "publish dry run",
        },
        push: {
          type: "boolean",
          default: true,
          desc: "no-push to skip pushing release tag to remote",
        },
      },
    },
    init: {
      alias: "i",
      desc: "Create a new fynpo repo",
      exec: execInit,
      options: {
        exact: {
          type: "boolean",
          default: false,
          desc: "Specify exact fynpo dependency version in package.json",
        },
      },
    },
  }
);

nixClap.parseAsync();
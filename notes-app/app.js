// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// const yargs = require('yargs')
import yargs from "yargs";
import chalk from "chalk";

import notes from "./notes.js";

//Add Command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

//Remove Command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

//list Command
yargs.command({
    command: "list",
    describe: "List your notes",
    handler() {
        notes.listNotes();
    },
});

//Read Command
yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.parse();

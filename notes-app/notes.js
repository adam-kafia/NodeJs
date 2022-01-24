import fs from "fs";
import chalk from "chalk";
import { notDeepEqual } from "assert";
const getNotes = () => {
    return "Your notes ...";
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => {
        return note.title === title;
    });
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note bot found"));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellowBright.inverse("Your notes:"));
    notes.forEach((note) => {
        console.log(" " + note.title);
    });
};

const addNote = (title, body) => {
    const notes = loadNotes();
    debugger;
    if (
        !notes.find((note) => {
            return note.title === title;
        })
    ) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("Note added"));
        // console.log(notes);
    } else {
        console.log(chalk.red.inverse("Note title taken"));
        // console.log(notes);
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => {
        return note.title !== title;
    });
    if (Object.entries(notes).length === Object.entries(newNotes).length) {
        console.log(chalk.red.inverse("Note does not exist"));
        // console.log(notes);
    } else {
        saveNotes(newNotes);
        console.log(chalk.green.inverse("Note: " + title + " deleted"));
        // console.log(newNotes);
    }
};

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.json"));
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    return fs.writeFileSync("notes.json", JSON.stringify(notes));
};
export default {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};

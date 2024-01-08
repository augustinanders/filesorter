# FileSorter Node.js Program

Welcome to FileSorter, a simple Node.js program designed to organize your files based on their extensions within a specified source folder. This tool streamlines the process of categorizing files, making it easy to maintain a tidy file structure.

## Usage

To use this program, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

2. Open a terminal and navigate to the folder where `filesorter.js` is located.

3. Run the program by providing the source folder as a command-line argument:

   ```bash
   node filesorter.js <sourceFolder>
   ```

   Replace `<sourceFolder>` with the path to the folder containing the files you want to organize.

   Example:

   ```bash
   node filesorter.js /path/to/source/folder
   ```

## Example

Suppose you run the program with the following command:

```bash
node filesorter.js /path/to/source/folder
```

If the source folder contains files like file1.txt, file2.js, and file3.txt, the program will organize them as follows:

```bash
/source/folder/
│
├── .txt/
│   ├── file1.txt
│   └── file3.txt
│
└── .js/
    └── file2.js
```

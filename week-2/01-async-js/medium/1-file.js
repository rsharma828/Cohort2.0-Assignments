const fs = require("fs");

function readFile(filePath, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function main() {
    const content = await readFile("1-file.txt");
    console.log(content);

    const ans = content.replace(/\s{2,}/g, ' ').trim()

    console.log(ans);

    return content;
}

main();

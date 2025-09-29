import promptSync from 'prompt-sync';

const prompt = promptSync();

const fNum: number = Number(prompt("Enter your username: "));

const sNum: number = Number(prompt("Enter your username: "));

function checkNumbers (fNum:number, sNum:number): number{
    return fNum + sNum;
}

console.log(checkNumbers(fNum,sNum));
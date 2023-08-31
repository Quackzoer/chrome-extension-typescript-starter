import { clearCommand } from "./helpers"

type RunOptions = {
    value: string,
    input: HTMLInputElement,
    args: string[]
}

export class Command{
    constructor(public name: string){
        
    }
    beforeRun(ctx: RunOptions){
        clearCommand(ctx.input)
    }
    run(ctx: RunOptions){
        console.log(this.name)
        console.log(ctx.value)
    }
}
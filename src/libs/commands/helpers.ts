export function clearCommand(input: HTMLInputElement){
    // delete from input everything after last '//.'
    const value = input.value
    const index = value.lastIndexOf('//.')
    if(index !== -1){
        input.value = value.slice(0, index)
    }
}
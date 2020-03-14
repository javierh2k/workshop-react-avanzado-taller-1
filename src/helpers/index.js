

export function debugForm(form){
    const result = {};

    for (var entry of form.entries())
    {
        result[entry[0]] = entry[1];
    }
    console.table(result);

}
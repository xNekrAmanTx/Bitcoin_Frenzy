const p = (str: string) => str.padStart(2, '0');

export const formatDate = (d: Date): string => 
    [p(`${d.getDate()}`), p(`${d.getMonth() + 1}`), `${d.getFullYear()}`].join('/') + 
    ' ' +
    p(`${d.getHours()}`) + ':' + p(`${d.getMinutes()}`)

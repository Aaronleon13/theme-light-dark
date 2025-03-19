// function paramExample (id, name, age){
//     console.log(id, name, age);
// }

// console.log(
//     paramExample(1, 'John', 25)
// ); // 1 John 25


const paramExample = (id, name, age) => {
    console.log(`Hola mi nombre es: ${name} y tengo ${age} años`);   
}


paramExample(1, 'John', 25); // Hola mi nombre es: John y tengo 25 años


function promesa (id, name, age){
    return new Promise((resolve, reject) => {
        if(id && name && age){
            resolve(`Hola mi nombre es: ${name} y tengo ${age} años`);
        }else{
            reject('Faltan datos');
        }
    });
}

promesa(1, 'John', 25)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

    

    async function otraPromesa() {
        try {
            const response = await promesa(1, 'John', 25);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }   
    }
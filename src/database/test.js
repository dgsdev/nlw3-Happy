const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
   
  // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.710729",
        lng: "-46.415841",
        name: "Lar das Crianças",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "988885555",
        images: [
            "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1565843248736-8c41e6db117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",

            "https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        ].toString(),
        instructions: "Venha nos visitar e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    }) 

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // // deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '8'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
 

})
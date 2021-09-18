exports.contatoController = (req,res) => {
    res.send(`' deixe seu contatos........<form action="/" method="post">
    contato: <input type="text" name="contato">
 <button>enviar</button>
</form>.........'`);
};

//exports.trataContato = (req,res) => {
//    res.send('obrigado pelo contato')
//}
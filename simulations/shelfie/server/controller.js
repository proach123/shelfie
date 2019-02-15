module.exports = {
    getAllInventory: (req, res) => {
      const db = req.app.get('db');
  
      db.get_all_inventory().then(response => {
        res.status(200).send(response);
      });
    },
  
    getInventory: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.params;
  
      db.get_inventory([id])
        .then(response => {
          res.status(200).send(response[0]);
        })
        .catch(err => console.log(err));
    },
  
    createInventory: (req, res) => {
      const db = req.app.get('db');
      const { name,price,img } = req.body;
  
      db.create_inventory([name,price,img]).then(response => {
        res.status(200).send(response);
      });
    },
  
    deleteInventory: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.params;
  
      db.delete_inventory([id]).then(response => {
        res.status(200).send(response);
      });
    },
  
    updateInventory: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.params;
      const { name,price,img } = req.body;
  
      db.update_inventory([id, name,price,img]).then(response => {
        res.status(200).send(response);
      });
    }
  };
  
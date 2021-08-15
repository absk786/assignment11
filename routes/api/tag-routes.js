const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    order: [['created_at', 'DESC']],
    include: [
      {
        //need to go through this cross ref table to get to product description
        model: ProductTag,
        include: {
          //product will get the description
          model: Product,
          attributes: ['product_name']
        }
      },
    ]
  }).then(dbTagData => {
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  // be sure to include its associated Product data
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(400).json({message:"this tag does not exist"})
      return
    }
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  // be sure to include its associated Product data
});

// create a new tag
router.post('/', (req, res) => {
Tag.create(req.body)
.then(dbTagData => {
  res.json(dbTagData)
})
.catch(err => {
  console.log(err)
  res.status(500).json(err)
})
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id:req.params.id
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({
        message:"this tag was not found"
      })
      return;
    }
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({message:"this tag was not found"})
      return
    }
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});




module.exports = router;

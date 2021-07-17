const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then(dbTagData => {
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
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
Tag.create({
  tag_name: "newTag"
})
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
  Tag.Update({
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

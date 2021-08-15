const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {
  Category.findAll().then(dbCategoryData => res.json(dbCategoryData)).catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  // be sure to include its associated Products
});
// find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(400).json({message: "this catogery does not exist"})
      return;}
      res.json(dbCategoryData)
    }
  )
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  // be sure to include its associated Products
});

// create a new category
router.post('/', (req, res) => {
  console.log(req.body)
  Category.create(req.body)
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where:{
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({
        message:"catogery not found"
      })
      return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
.then(dbCategoryData => {
  if(!dbCategoryData) {
    res.status(404).json({
      message:"catogery not found"
    })
    return;
  }
  res.json({
    message:"Deleted"
  })
})
.catch(err => {
  console.log(err)
  res.status(500).json(err)
})
});

module.exports = router;

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete:"cascade"
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete:'cascade'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey:'tag_id',
  onDelete:'cascade'
})


ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});





module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

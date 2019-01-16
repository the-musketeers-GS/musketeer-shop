const router = require('express').Router();
const { User } = require('../db/models');
const isAdmin = require('../middlewares/isAdmin');
module.exports = router;

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'isAdmin']
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    console.log('user switch isAdmin part1', user.isAdmin);
    // if (user.isAdmin) {
    //   user.isAdmin = false;
    // } else {
    //   user.isAdmin = true;
    // }
    console.log('user switch isAdmin part2', user.isAdmin);
    const updatedUser = await user.update(
      { isAdmin: !user.isAdmin },
      {
        returning: true,
        plain: true
      }
    );

    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  //console.log('req.params.id', req.params.id);
  try {
    const user = await User.findById(req.params.id);
    console.log('user', user);
    if (!user) {
      const err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    await user.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
});

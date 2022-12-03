const Boards = require('../models/boards');

/**
 * Details about the stage
 * 1: TODO
 * 2: In Progress
 * 3: Completed
 */

class BoardController {
  async add(req, res) {
    const { title } = req.body;

    const task = {
      title,
      stage: 1
    }

    const board = Boards.build(task);

    const savedTask = await board.save();

    return res.status(201).json(savedTask)
  }

  async update(req, res) {
    const { stage } = req.body;
    const { id } = req.params;

    if (stage < 1 || stage > 3) {
      return res.status(400).send();
    }

    await Boards.update({stage}, {
      where: {
        id
      }
    });

    const updatedTask = await Boards.findOne({where: {id}});

    return res.json(updatedTask);
  }
}

module.exports = BoardController;
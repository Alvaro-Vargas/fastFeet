import * as Yup from 'yup';
import Deliverymen from '../models/Deliverymen';
import File from '../models/File';

class DeliverymenController {
  async index(req, res) {
    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to list the Deliverymen!',
      });
    }

    const deliverymen = await Deliverymen.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymen);
  }

  async store(req, res) {
    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to register a Deliveryman!',
      });
    }

    // Validating req.body
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const emailExists = await Deliverymen.findOne({
      where: { email: req.body.email },
    });

    if (emailExists) {
      return res
        .status(400)
        .json(`User already registered with email: ${req.body.email}`);
    }

    const deliverymen = await Deliverymen.create(req.body);

    return res.json(deliverymen);
  }

  async update(req, res) {
    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to register a Deliveryman!',
      });
    }

    // Validating req.body
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      newEmail: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliverymen = await Deliverymen.findOne({
      where: { email: req.body.email },
    });

    if (!deliverymen) {
      return res.status(400).json('User does not exist');
    }
    const { email, newEmail } = req.body;

    if (newEmail && newEmail !== email) {
      req.body.email = newEmail;
    }

    const deliverymenUpdated = await deliverymen.update(req.body);

    return res.json(deliverymenUpdated);
  }

  async delete(req, res) {
    return res.json({ ok: true });
  }
}

export default new DeliverymenController();

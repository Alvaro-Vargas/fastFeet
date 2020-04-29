import * as Yup from 'yup';
import Deliverymen from '../models/Deliverymen';

class DeliverymenController {
  async index(req, res) {
    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to list the Deliverymen!',
      });
    }

    return res.json({ ok: true });
  }

  async store(req, res) {
    console.log('reached the right place');
    console.log(req.body);

    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to register a Deliveryman!',
      });
    }
    console.log('user is admin');

    // Validating req.body
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    console.log('the validation works');

    const deliverymen = await Deliverymen.create(req.body);

    return res.json(deliverymen);
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async delete(req, res) {
    return res.json({ ok: true });
  }
}

export default new DeliverymenController();

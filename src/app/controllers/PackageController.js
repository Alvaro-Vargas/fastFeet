// Validation
import * as Yup from 'yup';

// /Date manipulation

// Related models
import Package from '../models/Package';
// import Recipient from '../models/Recipient';
// import Deliverymen from '../models/Deliverymen';
// import File from '../models/File';

class DeliveryController {
  async index(req, res) {
    const deliveries = await Package.findAll({
      where: {
        canceled_at: null,
      },
    });

    return res.json(deliveries);
  }

  async store(req, res) {
    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to store a package!',
      });
    }

    // Validating req.body
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const package_created = await Package.create(req.body);

    return res.json(package_created);
  }

  async update(req, res) {
    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to update a package!',
      });
    }

    // Validating req.body
    const schema = Yup.object().shape({
      product: Yup.string(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id } = req.params;

    const package_get = await Package.findByPk(id);

    const package_updated = await package_get.update(req.body);

    return res.json(package_updated);
  }

  async delete(req, res) {
    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to update a package!',
      });
    }
    const { id } = req.params;

    const package_get = await Package.findByPk(id);

    const package_updated = await package_get.update({
      canceled_at: new Date(),
    });

    return res.json(package_updated);
  }
}

export default new DeliveryController();

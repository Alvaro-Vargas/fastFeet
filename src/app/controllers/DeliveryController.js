import { isBefore, isAfter, setSeconds, setMinutes, setHours } from 'date-fns';
import Package from '../models/Package';

class DeliveryController {
  async update(req, res) {
    const { id_deliveryman, id_delivery, action } = req.params;
    const id_deliveryman_parsed = parseInt(id_deliveryman, 10);

    const package_delivery = await Package.findByPk(id_delivery);
    const { deliveryman_id } = package_delivery;

    if (deliveryman_id !== id_deliveryman_parsed) {
      return res
        .status(400)
        .json({ error: 'You are not assigned for this delivery' });
    }

    const delivery_action_time = new Date();

    const start_period = setSeconds(setMinutes(setHours(new Date(), 8), 0), 0);
    const end_period = setSeconds(setMinutes(setHours(new Date(), 18), 0), 0);

    if (action === 'start') {
      if (package_delivery.start_date) {
        return res.status(400).json({ error: 'This delivery already started' });
      }
      if (
        isAfter(delivery_action_time, start_period) ||
        isBefore(delivery_action_time, end_period)
      ) {
        return res.status(400).json({ error: 'Pickups only from 8am to 18pm' });
      }
    }

    if (action === 'end' && !package_delivery.start_date) {
      return res.status(400).json({ error: 'This delivery have started yet' });
    }

    if (action === 'end' && package_delivery.end_date) {
      return res.status(400).json({ error: 'This delivery already ended ' });
    }

    const update_action = `${action}_date`;

    package_delivery.update({
      [update_action]: delivery_action_time,
    });

    return res.json({
      package_delivery,
    });
  }
}

export default new DeliveryController();

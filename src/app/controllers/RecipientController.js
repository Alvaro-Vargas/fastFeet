import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    // Validate Schema
    const schema = Yup.object().shape({
      recipient_name: Yup.string().required(),
      email: Yup.string().email().required(),
      street: Yup.string().required(),
      st_number: Yup.number().integer().positive().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to create a Recipient!',
      });
    }

    // Check to see if recipient does not already exist
    const recipientExists = await Recipient.findOne({
      where: { email: req.body.email },
    });

    if (recipientExists) {
      return res.status(400).json({
        error: 'Recipient already exists. Unique e-mail is necessary!',
      });
    }

    // Create recipient

    const {
      id,
      recipient_name,
      email,
      street,
      st_number,
      complement,
      state,
      city,
      cep,
    } = await Recipient.create(req.body);

    // Getting the creators emails and ID in case I want do logs later on.
    const { user_email, userId } = req;

    return res.json({
      id,
      recipient_name,
      email,
      street,
      st_number,
      complement,
      state,
      city,
      cep,
      created_by: {
        userId,
        user_email,
      },
    });
  }

  async update(req, res) {
    // Validate Schema
    const schema = Yup.object().shape({
      recipient_name: Yup.string(),
      email: Yup.string().email().required(),
      new_email: Yup.string().email(),
      street: Yup.string(),
      st_number: Yup.number().integer().positive(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      cep: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Check if the user is admin
    if (!req.isAdmin) {
      return res.status(400).json({
        error: 'You mus be a admin to update a Recipient!',
      });
    }

    // Find recipient
    const recipient = await Recipient.findOne({
      where: { email: req.body.email },
    });

    if (!recipient) {
      return res
        .status(401)
        .json({ error: 'No recipient exist for that email' });
    }

    // The previous e-mail must be passed to find the recipient
    // Then the email filed must receive the new value to be used in .update()
    if (req.body.new_email) {
      req.body.email = req.body.new_email;
    }

    const {
      recipient_name,
      email,
      new_email,
      street,
      st_number,
      complement,
      state,
      city,
      cep,
    } = await recipient.update(req.body);

    const { user_email, userId } = req;

    return res.json({
      recipient: {
        recipient_name,
        email,
        new_email,
        street,
        st_number,
        complement,
        state,
        city,
        cep,
        updated_by: {
          userId,
          user_email,
        },
      },
    });
  }
}

export default new RecipientController();

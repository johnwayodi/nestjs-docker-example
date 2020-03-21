import Joi = require('@hapi/joi');

export const registerSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),

  lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .min(8)
    .required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
});

export const loginSchema = Joi.object({
  username: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
});

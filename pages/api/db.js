/* eslint-disable linebreak-style */
import db from '../../db.json';

export default function (request, response) {
  response.json(db);
}

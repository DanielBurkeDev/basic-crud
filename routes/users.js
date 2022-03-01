import express from "express";

import { createUser, getUsers, getUser, deleteUser, patchUser } from '../controllers/users.js';


const router = express.Router();

// GET
//all routes in here are starting with /users
router.get('/', getUsers);

// POST
router.post('/', createUser);

// colon  '/:id' means put this after users endpoint
router.get('/:id', getUser);

// DELETE
router.delete('/:id', deleteUser);

// UPDATE/PATCH
router.patch('/:id', patchUser);

export default router;
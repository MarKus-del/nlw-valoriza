import { Router } from 'express';
import { AuthenticateUserController } from './controller/AuthenticateUserController';
import { CreateComplimentController } from './controller/CreateComplimentsController';
import { CreateTagController } from './controller/CreateTagController';
import { CreateUserController } from './controller/CreateUserController';
import { ListTagsController } from './controller/ListTagsController';
import { ListUserReceiveComplimentsController } from './controller/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controller/ListUserSendComplimentsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.get("/tags", listTagsController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

router.get(
  "/users/compliments/receiver",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

export { router };
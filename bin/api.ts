#!/usr/bin/env ts-node

import { FASTIFY_LISTEN_OPTIONS } from '../lib/api/env';
import { fastifyInstance } from '../lib/api/index';

fastifyInstance.listen(FASTIFY_LISTEN_OPTIONS);

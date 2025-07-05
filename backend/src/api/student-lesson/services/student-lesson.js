'use strict';

/**
 * student-lesson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-lesson.student-lesson');

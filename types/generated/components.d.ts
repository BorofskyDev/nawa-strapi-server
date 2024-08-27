import type { Schema, Attribute } from '@strapi/strapi';

export interface SunDays extends Schema.Component {
  collectionName: 'components_sun_days';
  info: {
    displayName: 'days';
  };
  attributes: {
    taskDays: Attribute.Enumeration<
      ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    > &
      Attribute.Required;
  };
}

export interface DaysTaskDays extends Schema.Component {
  collectionName: 'components_days_task_days';
  info: {
    displayName: 'taskDays';
    description: '';
  };
  attributes: {
    sun: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    mon: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    tue: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    wed: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    thu: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    fri: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    sat: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sun.days': SunDays;
      'days.task-days': DaysTaskDays;
    }
  }
}

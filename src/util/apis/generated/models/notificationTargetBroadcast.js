/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Broadcast notification to all the devices
 *
 * @extends models['NotificationTarget']
 */
class NotificationTargetBroadcast extends models['NotificationTarget'] {
  /**
   * Create a NotificationTargetBroadcast.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NotificationTargetBroadcast
   *
   * @returns {object} metadata of NotificationTargetBroadcast
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'broadcast_target',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'NotificationTarget',
        className: 'NotificationTargetBroadcast',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationTargetBroadcast;
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

/**
 * @summary Device Set Owner
  *
 * The owner of a device set
 *
 */
class ListDeviceSetsOfUserOKResponseItemOwner {
  /**
   * Create a ListDeviceSetsOfUserOKResponseItemOwner.
   * @property {string} type Type of account
   * @property {string} id Account ID
   * @property {string} [displayName] Display name of the account
   * @property {string} name Name of the account
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListDeviceSetsOfUserOKResponseItemOwner
   *
   * @returns {object} metadata of ListDeviceSetsOfUserOKResponseItemOwner
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListDeviceSetsOfUserOKResponseItem_owner',
      type: {
        name: 'Composite',
        className: 'ListDeviceSetsOfUserOKResponseItemOwner',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListDeviceSetsOfUserOKResponseItemOwner;
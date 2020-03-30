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
 * Class representing a CreateErrorModel4.
 */
class CreateErrorModel4 {
  /**
   * Create a CreateErrorModel4.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateErrorModel4
   *
   * @returns {object} metadata of CreateErrorModel4
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateErrorModel',
      type: {
        name: 'Composite',
        className: 'CreateErrorModel4',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateErrorModel4;
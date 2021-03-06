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
 * Class representing a DeviceSetConfigurationImage.
 */
class DeviceSetConfigurationImage {
  /**
   * Create a DeviceSetConfigurationImage.
   * @property {string} [thumb]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceSetConfigurationImage
   *
   * @returns {object} metadata of DeviceSetConfigurationImage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceSetConfiguration_image',
      type: {
        name: 'Composite',
        className: 'DeviceSetConfigurationImage',
        modelProperties: {
          thumb: {
            required: false,
            serializedName: 'thumb',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceSetConfigurationImage;

/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Information required to publish devices to the Apple Developer account and
 * resign the application.
 *
 */
class UpdateDevicesRequest {
  /**
   * Create a UpdateDevicesRequest.
   * @member {number} [releaseId] When provided, will update the provided
   * release with the new set of devices. By default the latest release of the
   * distribution group is used when this property is omitted.
   * @member {string} username The username for the Apple Developer account to
   * publish the devices to.
   * @member {string} password The password for the Apple Developer account to
   * publish the devices to.
   * @member {string} p12Base64 The certificate to use for resigning the
   * application with the updated provisioning profiles.
   * @member {string} [p12Password] The password certificate if one is needed.
   * @member {boolean} [publishAllDevices] When set to true, all unprovisioned
   * devices will be published to the Apple Developer account.  When false,
   * only the provided devices will be published to the Apple Developer
   * account.
   * @member {array} [devices] Array of device UDID's to be published to the
   * Apple Developer account.
   * @member {array} [destinations] Array of distribution groups that the
   * devices should be provisioned from.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateDevicesRequest
   *
   * @returns {object} metadata of UpdateDevicesRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateDevicesRequest',
      type: {
        name: 'Composite',
        className: 'UpdateDevicesRequest',
        modelProperties: {
          releaseId: {
            required: false,
            serializedName: 'release_id',
            type: {
              name: 'Number'
            }
          },
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          p12Base64: {
            required: true,
            serializedName: 'p12_base64',
            type: {
              name: 'String'
            }
          },
          p12Password: {
            required: false,
            serializedName: 'p12_password',
            type: {
              name: 'String'
            }
          },
          publishAllDevices: {
            required: false,
            serializedName: 'publish_all_devices',
            type: {
              name: 'Boolean'
            }
          },
          devices: {
            required: false,
            serializedName: 'devices',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          destinations: {
            required: false,
            serializedName: 'destinations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpdateDevicesRequestDestinationsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpdateDevicesRequestDestinationsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateDevicesRequest;

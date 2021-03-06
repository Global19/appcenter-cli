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
 * Class representing a PerDeviceCountsOKResponse.
 */
class PerDeviceCountsOKResponse {
  /**
   * Create a PerDeviceCountsOKResponse.
   * @property {number} [averageSessionsPerUser] Average seesion per user.
   * @property {number} [previousAverageSessionsPerUser] Previous average
   * session per user.
   * @property {number} [totalCount] Total session per device count.
   * @property {number} [previousTotalCount] Previous total count.
   * @property {array} [sessionsPerUser] The session count for each interval
   * per device.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PerDeviceCountsOKResponse
   *
   * @returns {object} metadata of PerDeviceCountsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PerDeviceCountsOKResponse',
      type: {
        name: 'Composite',
        className: 'PerDeviceCountsOKResponse',
        modelProperties: {
          averageSessionsPerUser: {
            required: false,
            serializedName: 'average_sessions_per_user',
            type: {
              name: 'Number'
            }
          },
          previousAverageSessionsPerUser: {
            required: false,
            serializedName: 'previous_average_sessions_per_user',
            type: {
              name: 'Number'
            }
          },
          totalCount: {
            required: false,
            serializedName: 'total_count',
            type: {
              name: 'Number'
            }
          },
          previousTotalCount: {
            required: false,
            serializedName: 'previous_total_count',
            type: {
              name: 'Number'
            }
          },
          sessionsPerUser: {
            required: false,
            serializedName: 'sessions_per_user',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PerDeviceCountsOKResponseSessionsPerUserItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerDeviceCountsOKResponseSessionsPerUserItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PerDeviceCountsOKResponse;

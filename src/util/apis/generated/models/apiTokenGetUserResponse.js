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
 * Class representing a ApiTokenGetUserResponse.
 */
class ApiTokenGetUserResponse {
  /**
   * Create a ApiTokenGetUserResponse.
   * @property {uuid} tokenId The token's unique id (UUID)
   * @property {array} tokenScope The token's scope. A list of allowed roles.
   * @property {string} userEmail The user email
   * @property {uuid} userId The unique id (UUID) of the user
   * @property {string} userOrigin The creation origin of the user who created
   * this api token. Possible values include: 'appcenter', 'hockeyapp',
   * 'codepush'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiTokenGetUserResponse
   *
   * @returns {object} metadata of ApiTokenGetUserResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiTokenGetUserResponse',
      type: {
        name: 'Composite',
        className: 'ApiTokenGetUserResponse',
        modelProperties: {
          tokenId: {
            required: true,
            serializedName: 'token_id',
            type: {
              name: 'String'
            }
          },
          tokenScope: {
            required: true,
            serializedName: 'token_scope',
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
          userEmail: {
            required: true,
            serializedName: 'user_email',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: true,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          userOrigin: {
            required: true,
            serializedName: 'user_origin',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiTokenGetUserResponse;

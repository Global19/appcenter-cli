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
 * Class representing a DistributionGroupAADGroupsDeleteRequest.
 */
class DistributionGroupAADGroupsDeleteRequest {
  /**
   * Create a DistributionGroupAADGroupsDeleteRequest.
   * @property {array} [aadGroupIds] The list of aad group ids
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupAADGroupsDeleteRequest
   *
   * @returns {object} metadata of DistributionGroupAADGroupsDeleteRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupAADGroupsDeleteRequest',
      type: {
        name: 'Composite',
        className: 'DistributionGroupAADGroupsDeleteRequest',
        modelProperties: {
          aadGroupIds: {
            required: false,
            serializedName: 'aad_group_ids',
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
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupAADGroupsDeleteRequest;

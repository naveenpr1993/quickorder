/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable vtex/prefer-early-return */
import type { FunctionComponent } from 'react'
import React, { useState, useEffect } from 'react'
import {
  Table,
  Input,
  ButtonWithIcon,
  IconDelete,
  IconInfo,
  Tooltip,
  Dropdown,
} from 'vtex.styleguide'
import type { WrappedComponentProps } from 'react-intl'
import { injectIntl, defineMessages } from 'react-intl'
import PropTypes from 'prop-types'
import { useApolloClient, useQuery } from 'react-apollo'

import { ParseText, GetText } from '../utils'
import getRefIdTranslation from '../queries/refids.gql'
import OrderFormQuery from '../queries/orderForm.gql'

const remove = <IconDelete />

const messages = defineMessages({
  valid: {
    id: 'store/quickorder.valid',
  },
  available: {
    id: 'store/quickorder.available',
  },
  invalidPattern: {
    id: 'store/quickorder.invalidPattern',
  },
  withoutStock: {
    id: 'store/quickorder.withoutStock',
  },
  skuNotFound: {
    id: 'store/quickorder.skuNotFound',
  },
  withoutPriceFulfillment: {
    id: 'store/quickorder.withoutPriceFulfillment',
  },
  cannotBeDelivered: {
    id: 'store/quickorder.cannotBeDelivered',
  },
  ORD002: {
    id: 'store/quickorder.ORD002',
  },
  ORD003: {
    id: 'store/quickorder.ORD003',
  },
  ORD004: {
    id: 'store/quickorder.ORD004',
  },
  ORD005: {
    id: 'store/quickorder.ORD005',
  },
  ORD006: {
    id: 'store/quickorder.ORD006',
  },
  ORD007: {
    id: 'store/quickorder.ORD007',
  },
  ORD008: {
    id: 'store/quickorder.ORD008',
  },
  ORD009: {
    id: 'store/quickorder.ORD009',
  },
  ORD011: {
    id: 'store/quickorder.ORD011',
  },
  ORD012: {
    id: 'store/quickorder.ORD012',
  },
  ORD013: {
    id: 'store/quickorder.ORD013',
  },
  ORD014: {
    id: 'store/quickorder.ORD014',
  },
  ORD015: {
    id: 'store/quickorder.ORD015',
  },
  ORD016: {
    id: 'store/quickorder.ORD016',
  },
  ORD017: {
    id: 'store/quickorder.ORD017',
  },
  ORD019: {
    id: 'store/quickorder.ORD019',
  },
  ORD020: {
    id: 'store/quickorder.ORD020',
  },
  ORD021: {
    id: 'store/quickorder.ORD021',
  },
  ORD022: {
    id: 'store/quickorder.ORD022',
  },
  ORD023: {
    id: 'store/quickorder.ORD023',
  },
  ORD024: {
    id: 'store/quickorder.ORD024',
  },
  ORD025: {
    id: 'store/quickorder.ORD025',
  },
  ORD026: {
    id: 'store/quickorder.ORD026',
  },
  ORD027: {
    id: 'store/quickorder.ORD027',
  },
  ORD028: {
    id: 'store/quickorder.ORD028',
  },
  ORD029: {
    id: 'store/quickorder.ORD029',
  },
  ORD030: {
    id: 'store/quickorder.ORD030',
  },
  ORD031: {
    id: 'store/quickorder.ORD031',
  },
})

let orderFormId = ''

const ReviewBlock: FunctionComponent<WrappedComponentProps & any> = ({
  onReviewItems,
  hiddenColumns,
  reviewedItems,
  onRefidLoading,
  intl,
}: any) => {
  const client = useApolloClient()

  const { data: orderFormData } = useQuery<{
    orderForm
  }>(OrderFormQuery, {
    ssr: false,
    skip: !!orderFormId,
  })

  const [state, setReviewState] = useState<any>({
    reviewItems:
      reviewedItems.map((item: any, index: number) => {
        return {
          ...item,
          index,
        }
      }) || [],
  })

  const { reviewItems } = state

  if (orderFormData?.orderForm?.orderFormId) {
    orderFormId = orderFormData.orderForm.orderFormId
  }

  const errorMessage = {
    'store/quickorder.valid': messages.valid,
    'store/quickorder.available': messages.available,
    'store/quickorder.invalidPattern': messages.invalidPattern,
    'store/quickorder.skuNotFound': messages.skuNotFound,
    'store/quickorder.withoutStock': messages.withoutStock,
    'store/quickorder.withoutPriceFulfillment':
      messages.withoutPriceFulfillment,
    'store/quickorder.cannotBeDelivered': messages.cannotBeDelivered,
    'store/quickorder.ORD002': messages.ORD002,
    'store/quickorder.ORD003': messages.ORD003,
    'store/quickorder.ORD004': messages.ORD004,
    'store/quickorder.ORD005': messages.ORD005,
    'store/quickorder.ORD006': messages.ORD006,
    'store/quickorder.ORD007': messages.ORD007,
    'store/quickorder.ORD008': messages.ORD008,
    'store/quickorder.ORD009': messages.ORD009,
    'store/quickorder.ORD011': messages.ORD011,
    'store/quickorder.ORD012': messages.ORD012,
    'store/quickorder.ORD013': messages.ORD013,
    'store/quickorder.ORD014': messages.ORD014,
    'store/quickorder.ORD015': messages.ORD015,
    'store/quickorder.ORD016': messages.ORD016,
    'store/quickorder.ORD017': messages.ORD017,
    'store/quickorder.ORD019': messages.ORD019,
    'store/quickorder.ORD020': messages.ORD020,
    'store/quickorder.ORD021': messages.ORD021,
    'store/quickorder.ORD022': messages.ORD022,
    'store/quickorder.ORD023': messages.ORD023,
    'store/quickorder.ORD024': messages.ORD024,
    'store/quickorder.ORD025': messages.ORD025,
    'store/quickorder.ORD026': messages.ORD026,
    'store/quickorder.ORD027': messages.ORD027,
    'store/quickorder.ORD028': messages.ORD028,
    'store/quickorder.ORD029': messages.ORD029,
    'store/quickorder.ORD030': messages.ORD030,
    'store/quickorder.ORD031': messages.ORD031,
  }

  const validateRefids = (refidData: any, reviewed: any) => {
    let error = false

    if (refidData) {
      const refIdNotFound =
        !!refidData && !!refidData.skuFromRefIds.items
          ? refidData.skuFromRefIds.items.filter((item: any) => {
              return item.sku === null
            })
          : []

      const refIdFound =
        !!refidData && !!refidData.skuFromRefIds.items
          ? refidData.skuFromRefIds.items.filter((item: any) => {
              return item.sku !== null
            })
          : []

      const refNotAvailable =
        !!refidData && !!refidData.skuFromRefIds.items
          ? refidData.skuFromRefIds.items.filter((item: any) => {
              return item.availability !== 'available'
            })
          : []

      const mappedRefId = {}

      if (refidData?.skuFromRefIds?.items) {
        refidData.skuFromRefIds.items.forEach((item: any) => {
          mappedRefId[item.refid] = item
        })
      }

      const errorMsg = (item: any) => {
        let ret: any = null
        const notfound = refIdNotFound.find((curr: any) => {
          return curr.refid === item.sku && curr.sku === null
        })

        const found = refIdFound.find((curr: any) => {
          return curr.refid === item.sku && curr.sku !== null
        })

        ret = notfound
          ? 'store/quickorder.skuNotFound'
          : found?.availability && found.availability !== 'available'
          ? `store/quickorder.${found.availability}`
          : null

        return ret
      }

      if (refIdNotFound.length || refNotAvailable.length) {
        error = true
      }

      const items = reviewed.map((item: any) => {
        return {
          ...item,
          sellers: item.sku ? mappedRefId[item.sku]?.sellers : '1',
          seller: item.seller ? item.seller : '1',
          vtexSku: item.sku ? mappedRefId[item.sku]?.sku : '1',
          unitMultiplier: item.sku
            ? mappedRefId[item.sku]?.unitMultiplier
            : '1',
          totalQuantity:
            (item.sku ? mappedRefId[item.sku]?.unitMultiplier : '1') *
            item.quantity,
          error: errorMsg(item),
        }
      })

      const merge = (original: any) => {
        const item = items.find((curr: any) => {
          return original.sku === curr.sku
        })

        return item || original
      }

      const updated = reviewItems.map((item: any) => {
        return merge(item)
      })

      onReviewItems(updated)
      setReviewState({
        ...state,
        reviewItems: updated,
        hasError: error,
      })
    }
  }

  const getRefIds = async (
    _refids: any,
    reviewed: any,
    refIdSellerMap: any
  ) => {
    onRefidLoading(true)
    const refids = _refids.length ? Array.from(new Set(_refids)) : []

    const query = {
      query: getRefIdTranslation,
      variables: { refids, orderFormId, refIdSellerMap },
    }

    const { data } = await client.query(query)

    validateRefids(data, reviewed)
    onRefidLoading(false)
  }

  const convertRefIds = (items: any) => {
    const refIdSellerMap = {}
    const refids = items
      .filter((item: any) => {
        return item.error === null
      })
      .map((item: any) => {
        refIdSellerMap[item.sku] = '1'

        return item.sku
      })

    getRefIds(refids, items, refIdSellerMap)
  }

  const checkValidatedItems = () => {
    const items: [any] = reviewItems.filter((item: any) => {
      return item.sku !== null && item.error === null && !item.vtexSku
    })

    if (items.length) {
      convertRefIds(items)
    }
  }

  useEffect(() => {
    checkValidatedItems()
  })

  const removeLine = (i: number) => {
    const items: [any] = reviewItems
      .filter((item: any) => {
        return item.index !== i
      })
      .map((item: any, index: number) => {
        return {
          ...item,
          line: index,
          index,
        }
      })

    onReviewItems(items)
    setReviewState({
      ...state,
      reviewItems: items,
    })
  }

  const updateLineContent = (index: number, content: string) => {
    const items = reviewItems.map((item: any) => {
      return item.index === index
        ? {
            ...item,
            content,
          }
        : item
    })

    setReviewState({
      ...state,
      reviewItems: items,
    })
  }

  const updateLineSeller = (index: number, seller: string) => {
    const refIdSellerMap = {}
    const items = reviewItems.map((item: any) => {
      return item.index === index
        ? {
            ...item,
            seller,
          }
        : item
    })

    const refids = items.map((item: any) => {
      refIdSellerMap[item.sku] = item.seller

      return item.sku
    })

    getRefIds(refids, items, refIdSellerMap)
  }

  const onBlurField = (line: number) => {
    const joinLines = GetText(reviewItems)
    const reviewd: any = ParseText(joinLines)

    if (reviewd[line].error === null) {
      setReviewState({
        ...state,
        reviewItems: reviewd,
      })
    }
  }

  const tableSchema: {
    properties: any
  } = {
    properties: {},
  }

  const createSchema = (columnsToBeHidden: string[]) => {
    if (columnsToBeHidden.indexOf('line') === -1) {
      tableSchema.properties.line = {
        type: 'object',
        title: intl.formatMessage({
          id: 'store/quickorder.review.label.lineNumber',
        }),
        width: 50,
        // eslint-disable-next-line react/display-name
        cellRenderer: ({ rowData }: any) => {
          return <div>{parseInt(rowData.line, 10) + 1}</div>
        },
      }
    }

    if (columnsToBeHidden.indexOf('content') === -1) {
      tableSchema.properties.content = {
        type: 'object',
        title: intl.formatMessage({
          id: 'store/quickorder.review.label.content',
        }),
        // eslint-disable-next-line react/display-name
        cellRenderer: ({ cellData, rowData }: any) => {
          if (rowData.error) {
            return (
              <div>
                <Input
                  value={cellData}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    updateLineContent(rowData.index, e.target.value)
                  }}
                  onBlur={() => {
                    onBlurField(rowData.line)
                  }}
                />
              </div>
            )
          }

          return <span>{cellData}</span>
        },
      }
    }

    if (columnsToBeHidden.indexOf('sku') === -1) {
      tableSchema.properties.sku = {
        type: 'string',
        title: intl.formatMessage({ id: 'store/quickorder.review.label.sku' }),
        width: 125,
      }
    }

    if (columnsToBeHidden.indexOf('quantity') === -1) {
      tableSchema.properties.quantity = {
        type: 'string',
        title: intl.formatMessage({
          id: 'store/quickorder.review.label.quantity',
        }),
        width: 75,
      }
    }

    if (columnsToBeHidden.indexOf('unitMultiplier') === -1) {
      tableSchema.properties.unitMultiplier = {
        type: 'float',
        title: intl.formatMessage({
          id: 'store/quickorder.review.label.multiplier',
        }),
        width: 100,
      }
    }

    if (columnsToBeHidden.indexOf('totalQuantity') === -1) {
      tableSchema.properties.totalQuantity = {
        type: 'float',
        title: intl.formatMessage({
          id: 'store/quickorder.review.label.totalQuantity',
        }),
        width: 100,
      }
    }

    if (columnsToBeHidden.indexOf('seller') === -1) {
      tableSchema.properties.seller = {
        type: 'string',
        title: intl.formatMessage({
          id: 'store/quickorder.review.label.seller',
        }),
        cellRenderer: ({ rowData }: any) => {
          if (rowData?.sellers?.length > 1) {
            return (
              <div>
                <Dropdown
                  options={rowData.sellers.map((item: any) => {
                    return {
                      label: item.name,
                      value: item.id,
                    }
                  })}
                  value={rowData.seller}
                  onChange={(_: any, v: any) => {
                    updateLineSeller(rowData.index, v)
                  }}
                />
              </div>
            )
          }

          return rowData?.sellers?.length ? rowData.sellers[0].name : ''
        },
      }
    }

    if (columnsToBeHidden.indexOf('error') === -1) {
      tableSchema.properties.error = {
        type: 'string',
        title: intl.formatMessage({
          id: 'store/quickorder.review.label.status',
        }),
        width: 75,
        cellRenderer: ({ cellData, rowData }: any) => {
          if (rowData.error) {
            const text = intl.formatMessage(
              errorMessage[cellData || 'store/quickorder.valid']
            )

            return (
              <span className="pa3 br2 dib mr5 mv0">
                <Tooltip label={text}>
                  <span className="c-danger pointer">
                    <IconInfo />
                  </span>
                </Tooltip>
              </span>
            )
          }

          return intl.formatMessage({ id: 'store/quickorder.valid' })
        },
      }
    }

    if (columnsToBeHidden.indexOf('delete') === -1) {
      tableSchema.properties.delete = {
        type: 'object',
        title: ' ',
        width: 75,
        // eslint-disable-next-line react/display-name
        cellRenderer: ({ rowData }: any) => {
          return (
            <div>
              <ButtonWithIcon
                icon={remove}
                variation="tertiary"
                onClick={() => {
                  removeLine(rowData.index)
                }}
              />
            </div>
          )
        },
      }
    }
  }

  createSchema(hiddenColumns)

  return (
    <div>
      <Table schema={tableSchema} items={reviewItems} fullWidth />
    </div>
  )
}

ReviewBlock.propTypes = {
  onReviewItems: PropTypes.func,
  reviewItems: PropTypes.array,
  hiddenColumns: PropTypes.array,
  onRefidLoading: PropTypes.func,
}

export default injectIntl(ReviewBlock)

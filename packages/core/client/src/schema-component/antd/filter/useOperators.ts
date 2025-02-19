import { useFieldSchema } from '@formily/react';
import { useCollection, useCollectionManager } from '../../../collection-manager';

/**
 * 获取当前字段所支持的操作符列表
 * @returns
 */
export const useOperatorList = () => {
  const schema = useFieldSchema();
  const fieldInterface = schema['x-designer-props']?.interface;
  const { name } = useCollection();
  const { getCollectionFields, getInterface } = useCollectionManager();
  const collectionFields = getCollectionFields(name);

  if (fieldInterface) {
    return getInterface(fieldInterface)?.filterable?.operators || [];
  }

  const field = collectionFields.find((item) => item.name === schema.name);
  return getInterface(field?.interface)?.filterable?.operators || [];
};

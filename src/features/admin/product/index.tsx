import {
  Table,
  Image,
  Tooltip,
  Button,
  Skeleton,
  Popconfirm,
  message,
  Spin
} from "antd";
import type { ColumnsType } from "antd/lib/table";
import {
  useDeleteProductByIdMutation,
  useGetProductsQuery,
} from "../../../api/product";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { IProduct } from "../../../interfaces/product";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import {useState} from 'react'
const AdminProduct = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken);
  const [
    deleteProduct,
    { isLoading: isDeleteLoading },
  ] = useDeleteProductByIdMutation();
  const confirm = (id: string) => {
    setRemoveLoadingMap((prevMap) => ({ ...prevMap, [id]: true }));
    deleteProduct(id).unwrap()
    .then(() => {
        messageApi.open({
            type: "success",
            content: "Product deleted!",
        });
        setRemoveLoadingMap((prevMap) => ({ ...prevMap, [id]: false }));
    })
  };
  const [removeLoadingMap, setRemoveLoadingMap] = useState<Record<number | string, boolean>>({});

  const { data: productData, isLoading } = useGetProductsQuery();

  const dataSource = (
    productData as { productData: IProduct[] } | undefined
  )?.data?.map(({ _id, name, price, desc, categoryName, image }: IProduct) => ({
    key: _id,
    name,
    price,
    desc,
    categoryName,
    image,
  }));
  const columns: ColumnsType<IProduct> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      render: (text) => (
        <Tooltip title={text}>
          <div
            style={{
              maxWidth: "300px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: "categoryName",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Image",
      render: (item: IProduct) => <Image width={200} src={item.image} />,
    },
    {
      title: "Action",
      key: "action",
      render: ({ key: _id }: any ) => (
        <div className="flex space-x-2">
          <Popconfirm
            
            title="Are you delete product?"
            onConfirm={() => confirm(_id)}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            okText="Yes"
            cancelText="No"
          >
            {isDeleteLoading && removeLoadingMap[_id]  ? (
              <Button type="primary" className="bg-[#2f54eb]">
                <Spin />
              </Button>
            ) : (
              <Button type="primary" className="bg-[#2f54eb]">
                Xóa
              </Button>
            )}
          </Popconfirm>

          <Button type="primary" danger>
            <Link to={`/admin/product/${_id}/edit`}>Sửa</Link>
          </Button>
        </div>
      ),
    },
  ];


  return (
    <div>
      <header className="mb-4 flex justify-between items-center">
        <h2 className="font-bold text-2xl">Product Management</h2>
        <Button type="primary" className="bg-[#2f54eb] hover:bg-[#10239e]">
          <Link to="/admin/product/add" className="flex items-center space-x-2">
            <AiOutlinePlus />
            Thêm sản phẩm
          </Link>
        </Button>
      </header>
      {contextHolder}
      {isLoading ? (
        <Skeleton />
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
    </div>
  );
};

export default AdminProduct;

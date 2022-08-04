import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import {TEST_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'zhangqiqi_';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: 'BiliBili主页',
          href: TEST_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> chriz Github </>,
          href: 'https://github.com/zhangqi0131',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;

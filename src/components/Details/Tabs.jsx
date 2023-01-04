import TabTitle from './TabTitle';

const Tabs = ({ children, selectedTab, setSelectedTab }) => (
  <div>
    <ul>
      {children.map((item, index) => (
        <TabTitle
          key={index}
          label={item.props.label}
          handleSelectTab={() => setSelectedTab(index)}
          selected = {selectedTab === index}
        />
      ))}
    </ul>
    {children[selectedTab]}
  </div>
);

export default Tabs;

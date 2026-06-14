import {
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineOfficeBuilding,
  HiOutlineShoppingCart,
  HiOutlineGlobeAlt,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineSun,
  HiOutlineFlag,
  HiOutlineUserGroup,
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineSparkles,
} from 'react-icons/hi';
import SectionHeader from '../components/SectionHeader';
import { industries } from '../data/content';
import styles from './Industries.module.css';

const industryIcons = {
  Healthcare: HiOutlineHeart,
  Education: HiOutlineAcademicCap,
  Finance: HiOutlineCurrencyDollar,
  Banking: HiOutlineOfficeBuilding,
  Retail: HiOutlineShoppingCart,
  'E-Commerce': HiOutlineGlobeAlt,
  Manufacturing: HiOutlineCube,
  Logistics: HiOutlineTruck,
  Agriculture: HiOutlineSun,
  Government: HiOutlineFlag,
  NGOs: HiOutlineUserGroup,
  'Real Estate': HiOutlineHome,
  Telecommunications: HiOutlinePhone,
  Hospitality: HiOutlineSparkles,
};

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <SectionHeader
          tag="Industries"
          title="Sector Experience Across Bangladesh"
          subtitle="We work with organisations in regulated and commercial sectors, adapting our delivery approach to sector-specific requirements and compliance standards."
        />

        <div className={styles.grid}>
          {industries.map((industry) => {
            const Icon = industryIcons[industry] || HiOutlineCube;
            return (
              <div key={industry} className={`${styles.card} surface-card`}>
                <Icon className={styles.icon} aria-hidden="true" />
                <span>{industry}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

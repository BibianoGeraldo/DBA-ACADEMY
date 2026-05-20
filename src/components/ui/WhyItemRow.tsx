import type { WhyItem } from '@/data/whyItems';
import { WhyIcon } from './WhyIcon';

interface WhyItemRowProps {
  item: WhyItem;
}

export function WhyItemRow({ item }: WhyItemRowProps) {
  return (
    <li className="why-item">
      <div className="why-icon">
        <WhyIcon iconId={item.iconId} />
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </li>
  );
}

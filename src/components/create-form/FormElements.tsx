import {
  CalendarDaysIcon,
  CalendarRangeIcon,
  CheckSquareIcon,
  ChevronDownCircleIcon,
  ClockIcon,
  HeadingIcon,
  // ImageIcon,
  ListTodoIcon,
  // PaperclipIcon,
  PencilLineIcon,
  TextIcon,
  ToggleRightIcon,
  TypeIcon,
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import {
  ListSearchSvg,
  ListSvg,
  NumberSvg,
  TextEditStyleSvg,
} from '../../assets/icons/Svgs';
import { ScrollArea } from '../ui/ScrollArea';
import SearchInput from '../shared/SearchInput';
import DraggableButton from './DraggableButton';

const elementGroups = [
  {
    title: 'Layout Elements',
    elements: [
      {
        text: 'heading',
        Icon: HeadingIcon,
      },
      {
        text: 'description',
        Icon: PencilLineIcon,
      },
    ],
  },
  {
    title: 'Text Elements',
    elements: [
      {
        text: 'single-line',
        Icon: TypeIcon,
      },
      {
        text: 'number',
        Icon: NumberSvg,
      },
      {
        text: 'multi-line',
        Icon: TextIcon,
      },
      {
        text: 'rich-text',
        Icon: TextEditStyleSvg,
      },
    ],
  },
  {
    title: 'Multi Elements',
    elements: [
      {
        text: 'checklist',
        Icon: ListTodoIcon,
      },
      {
        text: 'multi-choice',
        Icon: ListSvg,
      },
      {
        text: 'dropdown',
        Icon: ChevronDownCircleIcon,
      },
      {
        text: 'combobox',
        Icon: ListSearchSvg,
      },
      {
        text: 'checkbox',
        Icon: CheckSquareIcon,
      },
      {
        text: 'switch',
        Icon: ToggleRightIcon,
      },
    ],
  },
  {
    title: 'Date Elements',
    elements: [
      {
        text: 'date',
        Icon: CalendarDaysIcon,
      },
      {
        text: 'date-range',
        Icon: CalendarRangeIcon,
      },
      {
        text: 'time',
        Icon: ClockIcon,
      },
    ],
  },
  /* {
    title: 'Media Elements',
    elements: [
      {
        text: 'Attachments',
        Icon: PaperclipIcon,
      },
      {
        text: 'Image',
        Icon: ImageIcon,
      },
    ],
  }, */
];

interface Props {
  isUpdate?: boolean;
}

export default function FormElements({ isUpdate }: Props) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [parent] = useAutoAnimate();

  const filteredElementGroups = elementGroups.map(({ elements, title }, i) => {
    const filteredElements = elements.filter(({ text }) =>
      text.toLowerCase().includes(query.toLowerCase()),
    );

    if (filteredElements.length > 0)
      return (
        <article key={i}>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <ul className="mt-3 grid grid-cols-2 gap-4" ref={parent}>
            {filteredElements.map(({ text, Icon }, i) => (
              <DraggableButton text={text} Icon={Icon} key={i} />
            ))}
          </ul>
        </article>
      );
    else return null;
  });

  return (
    <ScrollArea
      className={`${
        isUpdate ? 'h-[calc(100vh-139px)]' : 'h-[calc(100vh-104px)]'
      } shrink-0 pr-[26px]`}
    >
      <aside className="relative w-80">
        <section className="sticky top-0 z-10 space-y-5 bg-white pb-5">
          <div className="space-y-1">
            <h1 className="text-lg font-semibold">Form Elements</h1>
            <h2 className="text-sm text-muted-foreground">
              Drag elements to the right
            </h2>
          </div>
          <SearchInput placeholder="Search Elements" />
        </section>
        <section className="flex flex-col gap-6" ref={parent}>
          {filteredElementGroups.every(element => element === null) ? (
            <p className="text-center text-sm font-medium text-muted-foreground">
              No results found
            </p>
          ) : (
            filteredElementGroups
          )}
        </section>
      </aside>
    </ScrollArea>
  );
}

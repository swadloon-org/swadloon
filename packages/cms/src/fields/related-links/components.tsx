import React from 'react';
import { Fragment, useState } from 'react';

import { controller } from '@keystone-6/core/fields/types/json/views';
import { FieldProps } from '@keystone-6/core/types';
import { Button } from '@keystone-ui/button';
import { FieldContainer, FieldLabel, TextInput } from '@keystone-ui/fields';
import { EditIcon, MinusCircleIcon } from '@keystone-ui/icons';

import * as styles from './components.css';

interface RelatedLink {
  label: string;
  href: string;
}

export const Field = ({ field, value, onChange, autoFocus }: FieldProps<typeof controller>) => {
  const [labelValue, setLabelValue] = useState('');
  const [hrefValue, setHrefValue] = useState('');
  const [index, setIndex] = useState<number | null>(null);

  const relatedLinks: RelatedLink[] = value ? JSON.parse(value) : [];

  const onSubmitNewRelatedLink = () => {
    if (onChange) {
      const relatedLinksCopy = [...relatedLinks, { label: labelValue, href: hrefValue }];
      onChange(JSON.stringify(relatedLinksCopy));
      onCancelRelatedLink();
    }
  };

  const onDeleteRelatedLink = (index: number) => {
    if (onChange) {
      const relatedLinksCopy = [...relatedLinks];
      relatedLinksCopy.splice(index, 1);
      onChange(JSON.stringify(relatedLinksCopy));
      onCancelRelatedLink();
    }
  };

  const onEditRelatedLink = (index: number) => {
    if (onChange) {
      setIndex(index);
      setLabelValue(relatedLinks[index].label);
      setHrefValue(relatedLinks[index].href);
    }
  };

  const onUpdateRelatedLink = () => {
    if (onChange && index !== null) {
      const relatedLinksCopy = [...relatedLinks];
      relatedLinksCopy[index] = { label: labelValue, href: hrefValue };
      onChange(JSON.stringify(relatedLinksCopy));
      onCancelRelatedLink();
    }
  };

  const onCancelRelatedLink = () => {
    setIndex(null);
    setLabelValue('');
    setHrefValue('');
  };

  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      {onChange && (
        <Fragment>
          <div className={styles.field}>
            <label className={styles.label}>Label</label>
            <input
              type={'text'}
              autoFocus={autoFocus}
              onChange={(event) => setLabelValue(event.target.value)}
              value={labelValue}
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <FieldLabel className={styles.label}>Href</FieldLabel>
            <TextInput
              autoFocus={autoFocus}
              onChange={(event) => setHrefValue(event.target.value)}
              value={hrefValue}
              className={styles.input}
            />
          </div>

          {index !== null ? (
            <Fragment>
              <Button onClick={onUpdateRelatedLink} className={styles.button}>
                Update
              </Button>
              <Button onClick={onCancelRelatedLink} className={styles.button}>
                Cancel
              </Button>
            </Fragment>
          ) : (
            <Button onClick={onSubmitNewRelatedLink} className={styles.button}>
              Add
            </Button>
          )}
        </Fragment>
      )}
      <ul className={styles.ul}>
        {relatedLinks.map((relatedLink: RelatedLink, i: number) => {
          return (
            <li key={`related-link-${i}`} className={styles.li}>
              <div className={styles.data}>
                <div className={styles.dataLabel}>{relatedLink.label}</div>
                <div className={styles.dataHref}>
                  <a href={relatedLink.href} target="_blank" rel="noreferrer">
                    {relatedLink.href}
                  </a>
                </div>
              </div>
              {onChange && (
                <div>
                  <Button
                    size="small"
                    onClick={() => onEditRelatedLink(i)}
                    className={styles.optionButton}
                  >
                    <EditIcon size="small" color="blue" />
                  </Button>
                  <Button size="small" className={styles.optionButton}>
                    <MinusCircleIcon
                      size="small"
                      color="red"
                      onClick={() => onDeleteRelatedLink(i)}
                    />
                  </Button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </FieldContainer>
  );
};

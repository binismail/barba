/**
 * @module typings/core
 */
import { SchemaPage } from '../schemas';
import { Trigger } from '.';

export type HooksBarba =
  | 'go'
  | 'refresh'
  | 'currentAdded'
  | 'currentRemoved'
  | 'nextAdded'
  | 'nextRemoved';

export type HooksAppear =
  | 'beforeAppear'
  | 'appear'
  | 'afterAppear'
  | 'appearCanceled';

export type HooksPage =
  | 'before'
  | 'beforeLeave'
  | 'leave'
  | 'afterLeave'
  | 'leaveCanceled'
  | 'beforeEnter'
  | 'enter'
  | 'afterEnter'
  | 'enterCanceled'
  | 'after';

export type HooksBefore = 'beforeAppear' | 'beforeLeave' | 'beforeEnter';
export type HooksAfter = 'afterAppear' | 'afterLeave' | 'afterEnter';

export type HooksTransition = HooksAppear | HooksPage;
export type HooksView = HooksBefore | HooksAfter;
export type HooksAll = HooksBarba | HooksTransition;
// Allow optional "dynamically created" hooks
export type HooksMap = { [key in HooksAll]?: any };

export type HookTransitionData = {
  current: SchemaPage;
  next: SchemaPage;
  trigger: Trigger;
};
export type HookViewData = HookTransitionData;

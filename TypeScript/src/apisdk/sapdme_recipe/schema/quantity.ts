/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { UnitOfMeasure } from './unit-of-measure';
/**
 * Representation of the 'Quantity' schema.
 */
export type Quantity =
  | {
      unitOfMeasure?: UnitOfMeasure;
      /**
       * The value of the quantity.
       */
      value?: number;
    }
  | Record<string, any>;

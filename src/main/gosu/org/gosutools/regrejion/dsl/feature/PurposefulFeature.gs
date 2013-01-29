/**
    Copyright 2013 Michael A. Wright

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */
package org.gosutools.regrejion.dsl.feature

uses org.gosutools.regrejion.dsl.impl.FeatureBuilder
uses org.gosutools.regrejion.dsl.impl.BuiltFeature
uses org.gosutools.regrejion.dsl.impl.Inspectable
uses org.gosutools.regrejion.dsl.impl.Inspector
uses org.gosutools.regrejion.dsl.steps.Step

class PurposefulFeature implements Inspectable {
  function withNoStepsRunOnceBeforeFirstScenario(): FeatureBeforeFirstScenario {
    return FeatureBuilder.featureWithStepsBeforeFirstScenario(this, {})
  }

  function withStepsRunOnceBeforeFirstScenario(steps: List <? extends Step>): FeatureBeforeFirstScenario {
    return FeatureBuilder.featureWithStepsBeforeFirstScenario(this, steps)
  }

  // @TODO remove this scaffolding
//  function build(): BuiltFeature {
//    return FeatureBuilder.build(null)
//  }
}